import fs from "fs/promises";
import path from "path";

export async function getJsonData() {
  const jsonDirectory = path.join(process.cwd(), "src", "data", "pool-config");
  const filesInDir = await fs.readdir(jsonDirectory);
  const jsonInDir = filesInDir.filter((file) => path.extname(file) === ".json");

  const jsonDataArray = await Promise.all(
    jsonInDir.map(async (json) => {
      const filePath = path.join(jsonDirectory, json);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const jsonData = JSON.parse(fileContent);
      return jsonData;
    })
  );

  return jsonDataArray;
}
