import { useRouter } from "next/router";

export default function useMoveToPage() {
  const router = useRouter;

  const moveToPage = (page) => () => {
    router.push(page);
  };

  return {
    moveToPage,
  };
}
