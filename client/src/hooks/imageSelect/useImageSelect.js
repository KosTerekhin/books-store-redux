import { useState, useEffect } from 'react';

const useImageSelect = () => {
	const [ imagesToDelete, setImagesToDelete ] = useState([]);
	const [ disabled, setdisabled ] = useState(true);

	const handleSelectImage = (id) => {
		imagesToDelete.includes(id)
			? setImagesToDelete(imagesToDelete.filter((image) => image !== id))
			: setImagesToDelete([ ...imagesToDelete, id ]);
	};

	useEffect(
		() => {
			imagesToDelete.length ? setdisabled(false) : setdisabled(true);
		},
		[ imagesToDelete ]
	);

	return { handleSelectImage, imagesToDelete, disabled };
};

export default useImageSelect;
