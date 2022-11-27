import { BidForm, } from "./modal";
import { useFormik } from "formik";
import {BidSchema   } from "../../validation/updateuser";

export const ModalCantainer = ({hidden,sethidden}) => {
  const onSubmit = async () => {
      // call Api for submit data
  };
  const formik = useFormik({
    initialValues: {
      bidPrice: "",
      bitQuantity: "",
      bidPlace:'',
      bidAvailableQuantity:""
    },
    validationSchema: BidSchema,
    onSubmit: onSubmit,
  });

  return <BidForm formik={formik}  hidden={hidden}  setHidden={sethidden} />;
};
