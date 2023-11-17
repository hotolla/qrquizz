import { Main } from "@/components/Main";
import { DataProvider } from "@/components/DataProvider";

export default function Page() {
  return (
    <DataProvider>
      <Main />
    </DataProvider>
);
};