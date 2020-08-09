import { normalize, schema } from 'normalizr';

const categorySchema = new schema.Array('categories');
const companySchema = new schema.Entity('companies');
const userSchema = new schema.Entity('users');
const serviceSchema = new schema.Entity('services');
const employeeSchema = new schema.Entity('employees');
const timingSchema = new schema.Entity('timings');
const appointmentSchema = new schema.Entity('appointments');

categorySchema.define({
  companies: [companySchema]
});

companySchema.define({
  favorites: [userSchema],
  services: [serviceSchema],
  employees: [employeeSchema]
});

appointmentSchema.define({
  user:userSchema,
  company:companySchema,
  employee:employeeSchema,
  timing:timingSchema,
  service:serviceSchema
});

userSchema.define({
  favorites:[companySchema]
});

serviceSchema.define({
  companies:[companySchema]
});

export const Schemas = {
  CATEGORY:categorySchema,
  CATEGORY_ARRAY:[categorySchema],
  COMPANY:companySchema,
  COMPANY_ARRAY:[companySchema],
  SERVICE:serviceSchema,
  SERVICE_ARRAY:[serviceSchema],
  USER:userSchema,
  USER_ARRAY:[userSchema],
  APPOINTMENT:appointmentSchema,
  APPOINTMENT_ARRAY:[appointmentSchema],
  TIMING:timingSchema,
  TIMING_ARRAY:[timingSchema]
};
