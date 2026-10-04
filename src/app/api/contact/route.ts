import { NextResponse } from "next/server";

const WEB3FORMS_ACCESS_KEY = "f44700ea-b21e-4ee2-846d-6b0b30083f37";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, storeUrl, services, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, email, message)." },
        { status: 400 }
      );
    }

    const servicesList = Array.isArray(services) ? services.join(", ") : services || "Not specified";

    const payload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY,
      from_name: "Haseeb Arshed Portfolio",
      subject: `New Project Enquiry from ${name}`,
      name: name,
      email: email,
      "Shopify Store URL": storeUrl || "Not provided",
      "Services Needed": servicesList,
      message: message,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Enquiry submitted successfully via Web3Forms." },
        { status: 200 }
      );
    } else {
      console.error("Web3Forms API error:", result);
      return NextResponse.json(
        { success: false, error: result.message || "Failed to submit form to Web3Forms." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Contact API route exception:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
