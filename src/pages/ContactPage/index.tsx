import { FC, FormEvent, useState } from "react";
import { Container, Text } from "../../components";
import { Content } from "./styles";
import * as emailjs from "emailjs-com";

export const ContactPage: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    if (username === "" || email === "" || message === "") {
      setError(true);
      return;
    }
    setError(false);
    setSending(true);

    var data = {
      username: username,
      to_email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.SERVICE_ID as string,
        process.env.TEMPLATE_ID as string,
        data,
        process.env.USER_ID
      )
      .then(
        function (response) {
          console.log(response.status, response.text);
          setSending(false);
          setIsSent(true);
        },
        function (err) {
          console.log(err);
        }
      );
  };

  return (
    <Content>
      <Container>
        <div className="inner">
          <div className="title">
            <Text variant="h2" align="center">
              Art
            </Text>
            <Text variant="h2" align="center">
              of
            </Text>
            <Text variant="h2" align="center">
              Code
            </Text>
          </div>
          <Text variant="h4" align="center" mb={20}>
            Send a message to Thomas
          </Text>
          <div className="content">
            {!isSent && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(event) => setUsername(event.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <textarea
                  placeholder="Message"
                  onChange={(event) => setMessage(event.target.value)}
                />
                {error && (
                  <Text
                    variant="body1"
                    color="secondary"
                    align="center"
                    mt={10}
                    mb={20}
                  >
                    * Please fill in all the fields
                  </Text>
                )}

                <button type="submit" onClick={handleClick}>
                  {sending ? "Sending" : "Send"}
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </Content>
  );
};
