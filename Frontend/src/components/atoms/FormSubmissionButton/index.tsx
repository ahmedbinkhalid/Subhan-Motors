interface BtnData {
  data: string;
  pageLinkingHandler: (lastText: string) => void;
}

export const FormSubmissionButton: React.FC<BtnData> = ({ data, pageLinkingHandler}) => {
  return (
    <button
      className="rounded-lg py-3 text-white bg-red-500 uppercase text-sm font-sans font-bold self-center h-full w-full"
    onClick={() => {
      console.log("Data : ",data);
      pageLinkingHandler(`${data === "Sign Up" ? "login" : data === "login" ? "signup" : data === "Reset" ? "newPassword" : ""}`);
    }}
    >
      {data}
    </button>
  );
}
