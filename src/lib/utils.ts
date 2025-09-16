import { app } from "@/firebase";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const db = getFirestore(app);

export async function addLink(link: string) {
  try {
    const linkRef = await addDoc(collection(db, "links"), {
      link: link,
    });
    console.log("link added with ref id", linkRef.id);
  } catch (e) {
    console.error("Error occured ", e);
  }
}

export async function createUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "lonedev",
      email: "lonedev@example.com",
      active: true,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export type LinkDoc = { id: string; link: string };
export async function getLink(): Promise<LinkDoc[]> {
  try {
    const snap = await getDocs(collection(db, "links"));
    return snap.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as { link: string }),
    }));
  } catch (e) {
    console.error("Error gettting link", e);
    return [];
  }
}
