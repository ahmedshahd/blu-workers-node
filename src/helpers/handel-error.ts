import { ConflictException } from "@nestjs/common";

const handleErrorWhen = (errorsMap) => (error) => {
    errorsMap.forEach((errorMap) => {
      if (error.code === errorMap.code) {
        // Prisma error with code P2002 indicates a unique constraint violation
        throw new ConflictException(errorMap.message);
      }
    });
  
    throw error;
  };

  export default handleErrorWhen