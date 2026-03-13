import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock resend before importing the route
vi.mock("@/lib/resend", () => ({
  getResendClient: vi.fn(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ data: { id: "test-id" }, error: null }),
    },
  })),
}));

vi.mock("@/emails/ContactFormEmail", () => ({
  default: vi.fn(() => "mocked-email"),
}));

import { POST } from "@/app/api/contact/route";
import { NextRequest } from "next/server";

function makeRequest(body: Record<string, unknown>) {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 when fields are missing", async () => {
    const res = await POST(makeRequest({ name: "Test" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe("All fields are required");
  });

  it("returns 400 for invalid email", async () => {
    const res = await POST(
      makeRequest({ name: "Test", email: "not-an-email", message: "Hello" })
    );
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe("Invalid email address");
  });

  it("returns 200 on successful submission", async () => {
    const res = await POST(
      makeRequest({
        name: "Test User",
        email: "test@example.com",
        message: "Hello!",
      })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
  });

  it("returns 400 when all fields are empty strings", async () => {
    const res = await POST(
      makeRequest({ name: "", email: "", message: "" })
    );
    expect(res.status).toBe(400);
  });
});
