import * as Yup from "yup";

export const BidSchema = Yup.object({
  bidPrice: Yup.string().required('this field is required'),
  bitQuantity: Yup.string().required('this field is required'),
  bidPlace: Yup.string().required('this field is required'),
  bidAvailableQuantity: Yup.string().required('this field is required')
});