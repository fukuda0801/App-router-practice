"use client";

import { useFormState } from "react-dom";

import { createTask } from "@/actions/sampleActions";

const ServerActionsPage = () => {
  const taskId = 1;
  const createTaskWithTaskId = createTask.bind(null, taskId);
  const initialState = { error: "" };
  const [state, formAction] = useFormState(createTaskWithTaskId, initialState);
  return (
    <div>
      <form action={formAction}>
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" className="bg-gray-200" />
        <button type="submit" className="bg-gray-400 ml-2 px-2">
          送信
        </button>
        <i className="fa-solid fa-utensils"></i>
        <div>{state.error}</div>
      </form>
    </div>
  );
};

export default ServerActionsPage;
