import React from "react";

const cardsOrders = () => {
  return (
    <div className="border w-2/3">
      {/**header de la card */}
      <div className="flex justify-between px-4 py-1 bg-bgPrimary rounded-b-lg">
        <div className="">entregado el 29 de junio de 2024</div>
        <div>Detalle del pedido</div>
      </div>

      <div className="flex px-4 py-4">
        <div className="w-2/3 flex flex-col gap-2">


          <div className="flex gap-3 border">
            <div>
              <div>1 unid</div>
            </div>
            <div className="flex gap-1">
              <div className="w-12 h-12">
                <img src="https://cdn.colombia.com/gastronomia/2011/07/28/ternera-a-la-llanera-1668-1.gif" alt="" className="w-full h-full" />
              </div>
              <div>
                <div>Carne a la llanera</div>
                <div>$ 13,00 </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 border">
            <div>
              <div>1 unid</div>
            </div>
            <div className="flex gap-1">
              <div className="w-12 h-12">
                <img src="https://cdn.colombia.com/gastronomia/2011/07/28/ternera-a-la-llanera-1668-1.gif" alt="" className="w-full h-full" />
              </div>
              <div>
                <div>Carne a la llanera</div>
                <div>$ 13,00 </div>
              </div>
            </div>
          </div>


        </div>
        <div className="w-1/3">
            <div className="h-full w-full flex flex-col justify-items-center justify-center">
                <button className="rounded-full">
                    chatear
                </button>
            </div>
        </div>
      </div>

      <div className="flex px-4 border-t-2 border-bgPrimary justify-between">
        <div>Restaurant : bodegas del sol</div>
        <div>Repartidor : alex ubago</div>
        <div>Total pagado : $26.000</div>
      </div>
    </div>
  );
};

export default cardsOrders;
