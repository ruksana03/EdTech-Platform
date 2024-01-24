/* eslint-disable react/prop-types */
import Modal from "../../shared/Modal";

const GeneralProfile = ({ isOpen, setIsOpen }) => {
    return (
        <div className="w-1/2">
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Your Profile" >
                <form>
                    <div className="space-y-3 mt-5">
                        <div className="flex flex-col gap-3">
                            <input name='image' type="file" className="file-input file-input-bordered file-input-success border-first w-full" required />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="description">Caption*</label>
                            <input className="bg-gray-200 dark:text-gray-400 dark:bg-zinc-700 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-first" name='caption' type="text" placeholder='Enter Your Caption....' required />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-xl font-bold" htmlFor="description">Short Description*</label>
                            <textarea name="description" className="bg-gray-200 dark:text-gray-400 dark:bg-zinc-700 appearance-none border-2 border-gray-200 dark:border rounded w-full h-32 py-2 text-[17px] px-4 leading-tight dark:focus:border-first focus:bg-white focus:border-first" placeholder='short description....' required ></textarea>
                        </div>
                        <div className="flex items-end justify-end mt-3 gap-3">
                            <button className="btn bg-red-600 text-white hover:text-red-600">Cancel</button>
                            <button type="submit" className="btn bg-first text-white hover:text-first">Published</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default GeneralProfile;