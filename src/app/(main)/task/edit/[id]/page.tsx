const TaskEditId = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
};
export default TaskEditId;
