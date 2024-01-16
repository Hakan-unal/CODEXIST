import { CHANGED } from "../constants";

export const codexist = (codexist: any = null, action: any) => {
  switch (action.type) {
    case CHANGED:
      codexist = {
        ...codexist,
        drivers: action.drivers,
      };
      return codexist;
  }

  return codexist;
};
