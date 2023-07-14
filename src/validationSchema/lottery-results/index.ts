import * as yup from 'yup';

export const lotteryResultValidationSchema = yup.object().shape({
  result: yup.string().required(),
  date: yup.date().required(),
  organization_id: yup.string().nullable(),
});
