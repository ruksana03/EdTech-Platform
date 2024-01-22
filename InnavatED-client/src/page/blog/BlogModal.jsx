/* eslint-disable react/prop-types */
import Modal from '../../components/shared/Modal';

const BlogModal = ({ isOpen, setIsOpen }) => {
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Create Your Post" >
            </Modal>
        </div>
    );
};

export default BlogModal;