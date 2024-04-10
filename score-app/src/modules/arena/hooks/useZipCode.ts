import { useMutation } from 'react-query';
import { ZipCodeService } from '../services/zipCode.service';

export function useZipCode() {
  const { mutateAsync: handleValidateCep, isLoading } = useMutation(
    (zipCode: string) =>
      ZipCodeService.getInstance().handleValidateZipCode(zipCode)
  );

  return {
    handleValidateCep,
    isLoading
  };
}
