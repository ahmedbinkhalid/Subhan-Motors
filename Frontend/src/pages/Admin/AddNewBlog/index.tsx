import React from "react";
import AddBlogForm from "../../../components/molecules/admin/AddBlogForm";

export const AddNewBlog: React.FC = () => {
  return <AddBlogForm onSubmit={() => console.log("Hello g")} />;
};
