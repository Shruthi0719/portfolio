import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "resume.pdf");
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Shruthi_Yadav_Resume.pdf"',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Resume not found" },
      { status: 404 }
    );
  }
}
