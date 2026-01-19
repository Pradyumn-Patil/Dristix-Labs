import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Heading style={heading}>New Contact Form Submission</Heading>
            <Hr style={hr} />

            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>

            <Hr style={hr} />
            <Text style={footer}>
              This message was sent from the Dristix Labs website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const heading = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "left" as const,
  margin: "40px 0 20px",
};

const hr = {
  borderColor: "#e6e6e6",
  margin: "20px 0",
};

const label = {
  color: "#666666",
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  marginBottom: "4px",
};

const value = {
  color: "#1a1a1a",
  fontSize: "16px",
  margin: "0 0 24px",
};

const messageStyle = {
  color: "#1a1a1a",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 24px",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: "#898989",
  fontSize: "12px",
  lineHeight: "16px",
};
