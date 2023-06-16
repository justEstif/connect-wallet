import path from "path";
import { promises as fs } from "fs";

export async function getJsonData() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const filesInDir = await fs.readdir(jsonDirectory);
  const jsonInDir = filesInDir.filter((file) => path.extname(file) === ".json");
  const jsons = jsonInDir.map((json) => {});
}

export async function getJson(fileName: string) {
  const jsonDirectory = path.join(process.cwd(), "json", fileName);
  const fileContents = await fs.readFile(
    jsonDirectory + `/${fileName}.json`,
    "utf8"
  );
  return fileContents;
}
