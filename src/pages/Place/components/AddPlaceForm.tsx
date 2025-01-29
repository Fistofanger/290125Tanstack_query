import { useForm } from 'react-hook-form';
import './AddPlaceForm.css';

const AddPlaceForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      latitude: '',
      longitude: '',
    },
    // resolver:
  });

  const onHandleSubmit = () => {};

  return (
    <form className="AddPlaceForm" onSubmit={handleSubmit(onHandleSubmit)}>
      <button>Добавить</button>
    </form>
  );
};

export default AddPlaceForm;
