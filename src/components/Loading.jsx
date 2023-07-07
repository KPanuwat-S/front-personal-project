export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 bg-white opacity-70 z-40"></div>
      <div className="fixed inset-0 z-50">
        <div className="flex justify-center items-center min-h-full">
          <i class="fa-solid fa-spinner animate-spin"></i>
        </div>
      </div>
    </>
  );
}
