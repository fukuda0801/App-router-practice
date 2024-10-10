const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-blue-300 p-4">
      <div>管理者レイアウト</div>
      {children}
    </div>
  );
};
export default AdminLayout;
