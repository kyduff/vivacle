import { Button, Center } from "@chakra-ui/react";

const exampleData = [
  {
    id: 0,
    brand: "spotify",
  },
  {
    id: 3,
    brand: "duolingo",
  }
]

interface Token {
  id: number,
  brand: string,
}

const upload = async function (data: Token[]) {

  const requestInit = {
    method: "POST",
    headers: {
      Content: "application/json"
    },
    body: JSON.stringify({ data }),
  }

  const res = await fetch('/api/upload', requestInit);
  console.log(await res.json());
}

const download = async function () {
  const requestInit = {
    method: "GET",
    headers: {
      Content: "application/json",
    }
  }

  const res = await fetch('/api/download', requestInit)
  console.log(await res.json())
}


export default function Upstash() {

  return (
    <>
      <Center>
        <Button onClick={async () => upload(exampleData)}>Upload</Button>
        <Button onClick={async () => upload(exampleData)}>Download</Button>
      </Center>
    </>
  )
}