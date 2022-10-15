import { useState, FormEvent } from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, LockKey } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import axios from "axios";
export const Signin = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignin(event: FormEvent) {
    event.preventDefault();

    await  axios.post('/sessions', {
      email: 'eric@gmail.com',
      password: '12345'
    })

    setIsUserSignedIn(true);
  }
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        onSubmit={handleSignin}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" id="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="**********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <a
          href=""
          className="underline text-gray-400 text-xs hover:text-gray-200"
        >
          Esqueceu sua senha?
        </a>

        <a
          href=""
          className="text-gray-400 underline text-xs hover:text-gray-200"
        >
          Não possui conta? Crie uma agora?
        </a>
      </footer>
    </div>
  );
};
