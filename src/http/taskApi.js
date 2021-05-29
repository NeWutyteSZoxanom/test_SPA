import { $host } from "./index";
import axios from "axios";

export const fetchStatus = async () => {
  const { data } = await axios.get(
    "http://intravision-task.test01.intravision.ru/api/07e8e207-fcd7-488a-bd9f-3befccc84ed9/Statuses"
  );
  return data;
};

export const fetchTasks = async () => {
  const data = await axios.get(
    "http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=07e8e207-fcd7-488a-bd9f-3befccc84ed9"
  );
  return data;
};

export const createTask = async (task) => {
  const { data } = await axios.post(
    "http://intravision-task.test01.intravision.ru/api/07e8e207-fcd7-488a-bd9f-3befccc84ed9/Tasks",
    task
  );
  return data;
};

export const fetchOneTask = async (id) => {
  const { data } = await axios.get(
    "http://intravision-task.test01.intravision.ru/api/07e8e207-fcd7-488a-bd9f-3befccc84ed9/Tasks/" +
      id
  );
  return data;
};
export const fetchUsers = async () => {
  const { data } = await axios.get(
    "http://intravision-task.test01.intravision.ru/api/07e8e207-fcd7-488a-bd9f-3befccc84ed9/Users"
  );
  return data;
};
export const updateTask = async (task) => {
  const { data } = await axios.put(
    "http://intravision-task.test01.intravision.ru/api/07e8e207-fcd7-488a-bd9f-3befccc84ed9/Tasks",
    task
  );
  return data;
};
