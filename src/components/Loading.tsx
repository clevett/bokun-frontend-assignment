export const Loading = () => {
  return (
    <div className="grid justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
      <span>Loading...</span>
    </div>
  );
};
