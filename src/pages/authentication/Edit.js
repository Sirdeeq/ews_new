import React from 'react';

function Edit() {
    const initialFormData = Object.freeze({
        id: '',
        book_cover: '',
        book_name: '',
        book_summary: ''
    });

    const [formData, updateFormData] = useState(initialFormData);
    const [image, setImage] = useState(null);
    const { register, handleSubmit, control, errors } = useForm();

    useEffect(() => {
        axiosInstance.get('api/books/info/update/').then((res) => {
            updateFormData({
                ...formData,
                ['book_cover']: res.data.book_cover,
                ['book_name']: res.data.book_name,
                ['book_summary']: res.data.book_summary
            });
        });
    }, [updateFormData]);

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setImage({
                image: e.target.files
            });
            // console.log(e.target.files);
        }
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (data) => {
        let formData = new FormData();

        formData.append('user', user.id),
            formData.append('book_cover', data.image[0]),
            formData.append('book_name', data.book_name),
            formData.append('book_summary', data.book_summary),
            axiosInstance.put('api/books/info/update/', formData);
    };
    return (
        <>
            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {/* Show existing book cover and change when new one is uploaded */}
                        <img src={formData.store_logo} alt="" />
                        <label htmlFor="book-cover">
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="book-cover"
                                onChange={handleChange}
                                name="image"
                                type="file"
                                ref={register}
                            />
                            Book Cover
                            <IconButton color="primary" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="book_name"
                            label="Book Name"
                            name="book_name"
                            autoComplete="book_name"
                            value={formData.book_name}
                            onChange={handleChange}
                            inputRef={register({ maxLength: 30 })}
                            rows={1}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="book_summary"
                            label="Book Summary"
                            name="book_summary"
                            autoComplete="book_summary"
                            value={formData.book_summary}
                            onChange={handleChange}
                            inputRef={register({ maxLength: 1000 })}
                            multiline
                            rows={3}
                        />
                    </Grid>
                </Grid>

                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Update
                </Button>
            </form>
        </>
    );
}
