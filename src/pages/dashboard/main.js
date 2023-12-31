import { CardStatus } from "./component/card-status";
import { Table } from "./component/table";
import { Classification } from "./component/classification";
import { RecentSendResult } from "./component/recent-send-result";
import { useEffect, useState } from "react";
import { OperatorServices } from "src/services/OperatorServices";

export function MainSection() {
  const operatorService = new OperatorServices();
  const [promise, setPromise] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    var result = await operatorService.getAllPromises();
    setPromise(result);
  }

  return (
    <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
      <p className="font-bold">
        Hey Operator -{" "}
        <span className="text-gray-500 font-normal">
          here's what's happening with your patient today
        </span>
      </p>
      <CardStatus />
      <div className="flex mt-5 space-x-5">
        <Table promise={promise.slice(0,4)}/>
        <div className="flex-col w-1/3">
          <Classification />
          <RecentSendResult />
        </div>
      </div>
    </div>
  );
}
