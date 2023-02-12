import React from "react";
import { useEffect, useState } from "react";
import { consultarBBD } from "../../utils/funciones";

export const ItemListContainer = () => {
  useEffect(() => {
    consultarBBD("./json/Productos.json").then((prods) => console.log(prods));
  }, []);

  return;
  <></>;
};
