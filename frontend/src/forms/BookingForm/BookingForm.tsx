export type BookingFormData = {
    firstName: string;
    lastName: string;
    email: string;
    adultCount: number;
    childCount: number;
    checkIn: string;
    checkOut: string;
    hotelId: string;
    totalCost: number;
    paymentIntentId: string;
};

const BookingForm = () => {

    return (
        <form
            className="grid grid-cols-1 gap-5 rounded-lg border border-slate-300 p-5"
        >
            <span className="text-3xl font-bold">Confirm Your Details</span>
            <div className="grid grid-cols-2 gap-6">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input
                        type="text"
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        readOnly
                        disabled
                    />
                </label>

                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input
                        type="text"
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        readOnly
                        disabled
                    />
                </label>

                <label className="text-gray-700 text-sm font-bold flex-1">
                    Email
                    <input
                        type="text"
                        className="mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
                        readOnly
                        disabled
                    />
                </label>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold">Your Price Summary</h2>

                <div className="bg-blue-200 p-4 rounded-md">
                    <div className="font-semibold text-lg">
                        Total Cost:
                    </div>
                    <div className="text-xs">Includes taxes and charges</div>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-xl font-semibold"> Payment Details</h3>
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-md disabled:bg-gray-500"
                >
                    Confirm Booking
                </button>
            </div>
        </form>
    );
};

export default BookingForm;