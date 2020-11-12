import React, { useCallback, useState } from "react";

export default function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return [value, handler];
}
