import { NextResponse } from "next/server";
import { getAdmin } from "@/appwrite";
import { Query } from "node-appwrite";

export async function GET() {
    const dbId = process.env.APPWRITE_DATABASE;
    const colId = process.env.APPWRITE_COLLECTION;
    if (!dbId || !colId) return NextResponse.json({ status: 403 });
    const { database } = await getAdmin();
    const res = await database.listDocuments(dbId, colId, [Query.limit(9999), Query.offset(0)]);
    return NextResponse.json({ total: res.total });
}
