import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Author } from "@/data/constants";
import HashCodeImage from "@/content/images/hashcode-logo2.png";

type VisitEmailTemplateProps = {
  ip_adress: string;
};

export const VisitEmailTemplate = ({ ip_adress }: VisitEmailTemplateProps) => (
  <Html>
    <Head title={Author.name} />
    <Preview>Someone viewed your learning progress</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Img
            src="https://avatars.githubusercontent.com/u/81830567?v=4"
            width={100}
            height={100}
            alt="Fariol Blondeau Logo"
          />
        </Section>
        <Heading style={h1}>Your Learning Progress Was Viewed</Heading>
        <Text style={heroText}>
          Hello {Author.name}, Your learning progress has been accessed. Below
          is the IP address of the visitor:
        </Text>
        <Section style={codeBox}>
          <code style={confirmationCodeText}>{ip_adress}</code>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default VisitEmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "20px",
  fontWeight: "700",
  margin: "20px 0 10 0",
};

const heroText = {
  fontSize: "18px",
  marginBottom: "20px",
  fontWeight: "400",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "8px",
  margin: "12px auto",
  padding: "10px",
  textAlign: "center" as const,
};

const confirmationCodeText = {
  fontSize: "26px",
  fontWeight: "400",
};
