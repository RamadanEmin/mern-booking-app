import { FormProvider, useForm } from 'react-hook-form';
import DetailsSection from './DetailsSection';
import TypeSection from './TypeSection';
import FacilitiesSection from './FacilitiesSection';
import GuestsSection from './GuestsSection';

export type HotelFormData = {
    name: string;
    city: string;
    country: string;
    description: string;
    type: string;
    pricePerNight: number;
    starRating: number;
    facilities: string[];
    imageFiles: FileList;
    imageUrls: string[];
    adultCount: number;
    childCount: number;
};

type Props = {
    isLoading: boolean;
};

const ManageHotelForm = ({ isLoading }: Props) => {
    const formMethods = useForm<HotelFormData>();

    return (
        <FormProvider {...formMethods}>
            <form className="flex flex-col gap-10">
            <DetailsSection />
            <TypeSection />
            <FacilitiesSection />
            <GuestsSection />
                <span className="flex justify-end">
                    <button
                        disabled={isLoading}
                        type='submit'
                        className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:bg-gray-500"
                    >
                        {isLoading ? 'Saving...' : 'Save'}
                    </button>
                </span>
            </form>
        </FormProvider>
    );
};

export default ManageHotelForm;