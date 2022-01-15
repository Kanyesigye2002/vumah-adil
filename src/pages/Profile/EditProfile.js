import React from 'react';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { MIconButton } from '../../components/@material-extend';
import { Close } from '@mui/icons-material';
import useDroidDialog from '../../hooks/useDroidDialog';
import { Alert, Box, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

function EditProfile(props) {
  const { onClose } = useDroidDialog();

  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const RegisterSchema = Yup.object().shape({
    avatarUrl: Yup.string().required('reg required'),
    cover: Yup.string().required('reg required'),
    lastName: Yup.string().required('reg required'),
    firstName: Yup.string().required('reg required'),
    description: Yup.string().required('reg required')
  });

  //MA68HXM

  const formik = useFormik({
    initialValues: {
      avatarUrl: '',
      cover: '',
      lastName: '',
      firstName: '',
      description: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting, setValues }) => {
      try {
        console.log('values: ', values);

        enqueueSnackbar('Vehicle created successfully', {
          variant: 'success',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Close />
            </MIconButton>
          )
        });

        if (isMountedRef.current) {
          setSubmitting(false);
        }
        onClose();
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    }
  });

  const { values, errors, touched, handleSubmit, getFieldProps, isSubmitting, setValues } = formik;

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
            <Stack spacing={1} sx={{ flexGrow: 1, width: '550px' }}>
              {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="First Name"
                  {...getFieldProps('firstName')}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />

                <TextField
                  fullWidth
                  label="Last Name"
                  {...getFieldProps('lastName')}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Stack>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                fullWidth
                multiline
                rows={3}
                {...getFieldProps('description')}
                error={Boolean(touched.description && errors.description)}
                helperText={touched.description && errors.description}
              />
              <Stack sx={{ pt: 3, pb: 1 }}>
                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                  Update Profile
                </LoadingButton>
              </Stack>
            </Stack>
          </Box>
        </Form>
      </FormikProvider>
    </>
  );
}

export default EditProfile;
