export default interface AddCharacterModal {
  open: boolean;
  isEditMode: boolean;
  handleClose: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newCharacterData: {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  };
  setNewCharacterData: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      status: string;
      species: string;
      gender: string;
      image: string;
    }>
  >;
}
