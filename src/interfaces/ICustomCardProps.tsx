import { Character } from './Character';

export default interface ICustomCardProps {
  character: Character;
  isList?: boolean;
  handleDelete?: (id: string) => void;
  handleEdit?: (id: string) => void;
}
