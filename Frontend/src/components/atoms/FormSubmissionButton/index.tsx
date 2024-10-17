interface BtnData {
  data: string;
}

export const FormSubmissionButton: React.FC<BtnData> = ({ data}) => {
  return (
    <button
      className="rounded-lg py-3 text-white bg-red-500 uppercase text-sm font-sans font-bold self-center h-full w-full"
    >
      {data}
    </button>
  );
};
