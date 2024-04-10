import { useMutation } from 'react-query';
import { ArenaDataForm } from '../../interfaces/arena-data-form.interface'
import { ArenaValidationService } from '../services/arena-validation.service';

export function useArenaValidation() {
  const { mutateAsync: handleValidateArena, isLoading } = useMutation(
    (arena: ArenaDataForm) =>
      ArenaValidationService.getInstance().handleValidateArena(arena)
  );

  return {
    handleValidateArena,
    isLoading
  };
}
