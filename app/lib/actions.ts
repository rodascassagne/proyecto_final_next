"use server";
import { object, z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "@/auth";
import bcrypt from 'bcrypt';
import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configuration using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export type State = {
  errors?: {
    name?: string[];
    rating?: string[];
    comment?: string[];
  }
  message?: string | null;
}

const ReviewFormSchema = z.object({
  productId: z.string(),
  name: z.string().trim().min(1, { message: "Name is required" }),
  comment: z.string().trim(),
  rating: z.coerce
    .number()
    .gte(1, { message: "Please select a rating" })
    .lte(5, { message: "Please select a rating" }),
});

const ReviewProduct = ReviewFormSchema.omit({ productId: true });
export async function reviewProduct(productId: string, prevState: State, formData: FormData) {
  // validate fields
  const validatedFields = ReviewProduct.safeParse({
    comment: formData.get("comment"),
    rating: formData.get("rating"),
    name: formData.get("name")
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to add review"
    };
  }

  const { name, rating, comment } = validatedFields.data;
  const session = await auth();
  if (session) {
    try {
      await sql`INSERT INTO reviews (product_id, user_id, username, rating, comment)
      VALUES (${productId}, ${session.user?.id}, ${name}, ${rating}, ${comment})`;
    } catch (error) {
      return {
        message: 'Database Error: Failed to add review.',
      };
    }
  } else {
    try {
      await sql`INSERT INTO reviews (product_id, username, rating, comment)
      VALUES (${productId}, ${name}, ${rating}, ${comment})`;
    } catch (error) {
      return {
        message: 'Database Error: Failed to add review.',
      };
    }
  }
  revalidatePath(`/products/${productId}`);
  redirect(`/products/${productId}`);
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}

export async function logOut() {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
}

export type SignUpState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    thumbnail?: string[];
    image?: string[];
    bio?: string[];
  }
  message?: string | null;
};

const SignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  thumbnail: z.string(),
  image: z.string(),
  bio: z.string()
});

interface CloudinaryResponse {
  secure_url: string;
}

export async function signUp(prevState: SignUpState | undefined, formData: FormData) {

  //---------------------------------- thumbnail------------------------------------------
  // const file_nail = formData.get("thumbnail") as File;
  // const buffer1 = Buffer.from(await file_nail.arrayBuffer());
  // const filename_thumbnail = file_nail.name.replaceAll(" ", "_");
 

  const file_nail = formData.get("thumbnail") as File;
  const bytes1 = await file_nail.arrayBuffer();
  const buffer1 = Buffer.from(bytes1);

  const response1 = await new Promise<CloudinaryResponse>((resolve, reject) => {
    cloudinary.uploader
    .upload_stream({}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result as CloudinaryResponse);
      }
    }).end(buffer1);
  });

  //console.log(response.secure_url);
  const y= response1.secure_url;



//---------------------------------- image------------------------------------------
  // const file_image = formData.get("image") as File;
  // const buffer2 = Buffer.from(await file_image.arrayBuffer());
  // const filename_image = file_image.name.replaceAll(" ", "_");

  const file_image = formData.get("image") as File;
  const bytes2 = await file_image.arrayBuffer();
  const buffer2 = Buffer.from(bytes2);

  const response2 = await new Promise<CloudinaryResponse>((resolve, reject) => {
    cloudinary.uploader
    .upload_stream({}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result as CloudinaryResponse);
      }
    }).end(buffer2);
  });

  //console.log(response.secure_url);
  const z= response2.secure_url;






  

  const validatedFields = SignUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    thumbnail: file_nail.name !== 'undefined' ? response1.secure_url : '/products/noimage.png',
    image: file_image.name !== 'undefined' ? response2.secure_url : '/products/noimage.png',
    bio: formData.get("bio"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
    };
  }

  const { name, email, password, thumbnail, image, bio } = validatedFields.data;

  try {
    const userExists = await sql`SELECT email FROM sellers WHERE sellers.email = ${email.trim()}`;
    if (userExists.rowCount) return { message: "An account exists for this user." };

    const hashedPassword = await bcrypt.hash(password, 10);
    await sql`
        INSERT INTO sellers (name, seller_thumbnail, seller_image, seller_bio, email, password)
        VALUES (${name}, ${thumbnail}, ${image}, ${bio}, ${email}, ${hashedPassword})
        RETURNING id;`;

    await signIn('credentials', { email: email, password: password, redirect: true, redirectTo: "/" });
    redirect("/");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteProduct(id: string) {
  try {
    await sql`DELETE FROM reviews WHERE product_id = ${id}`;
    await sql`DELETE FROM products WHERE id = ${id}`;
    revalidatePath('/home/myproducts');
    return { message: 'Deleted Product' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Product' };
  }
}

export type ProductState = {
  errors?: {
    name?: string[];
    description?: string[];
    imageUrl?: string[];
    price?: string[];
  }
  message?: string | null;
}

const AddProductSchema = z.object({
  name: z.string().trim().min(1, { message: "Product Name is required" }),
  description: z.string().trim().min(1, { message: "Product Description is required" }),
  imageUrl: z.string(),
  price: z.coerce
    .number()
    .gte(1, { message: "Please enter valid price" })
});

interface CloudinaryResponse {
  secure_url: string;
}

export async function addProduct(prevState: ProductState | undefined, formData: FormData) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const file = formData.get("imageUrl") as File;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const response = await new Promise<CloudinaryResponse>((resolve, reject) => {
    cloudinary.uploader
    .upload_stream({}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result as CloudinaryResponse);
      }
    }).end(buffer);
  });

  //console.log(response.secure_url);
  const x= response.secure_url;

  const validatedFields = AddProductSchema.safeParse({
    description: formData.get("description"),
    imageUrl: file.name !== 'undefined' ? response.secure_url : '/products/noimage.png',
    price: formData.get("price"),
    name: formData.get("name")
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to add review"
    };
  }

  const { name, description, imageUrl, price } = validatedFields.data;

  try {
    await sql`INSERT INTO products (seller_id, name, description, price, image_url)
        VALUES (${session.user?.id}, ${name}, ${description}, ${price}, ${imageUrl})`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to add product.',
    };
  }
  revalidatePath('/profile');
}
