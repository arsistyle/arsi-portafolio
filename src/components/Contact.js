import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { postContact } from '../services';

import '../assets/scss/style/components/Contact.scss';

const options = {
  confirmButtonText: 'ok',
  width: 600,
  customClass: {
    title: 'h4',
    content: 'p',
    confirmButton: 'btn btn--primario',
    cancelButton: 'btn btn--secundario btn--borde',
  },
};

const Contact = ({ content }) => {
  const { register, handleSubmit, errors } = useForm();
  const [enviando, setEnviando] = useState(false);
  const onSubmit = (data) => {
    setEnviando(true);
    postContact(data).then((x) => {
      console.log(x);
      x?.status === 'hold' &&
        Swal.fire({
          title: 'Mensaje enviado',
          icon: 'success',
          ...options,
        });
      x?.code === 'comment_duplicate' &&
        Swal.fire({
          title: 'Este mensaje ya se envió',
          icon: 'error',
          ...options,
        });
      setEnviando(false);
    });
  };

  // console.log(watch('nombre'));
  // console.log(errors);

  return (
    <div className='contact'>
      <div className='container--fluid'>
        <div className='frame'>
          <div className='contact__container'>
            <div className='contact__content' dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className='contact__form'>
              <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <section className='form__content'>
                  <div className='form__item'>
                    <input
                      className={`form__text ${errors.nombre && 'invalid'}`}
                      type='text'
                      name='nombre'
                      id='nombre'
                      ref={register({ required: true })}
                    />
                    <label htmlFor='nombre' className='form__label'>
                      Nombre
                    </label>
                    {errors.nombre && (
                      <div className='form__alert form__alert--error'>Campo requerido</div>
                    )}
                  </div>
                  <div className='form__item'>
                    <input
                      className={`form__text ${errors.email && 'invalid'}`}
                      type='email'
                      name='email'
                      id='email'
                      ref={register({ required: true })}
                    />
                    <label htmlFor='email' className='form__label'>
                      Email
                    </label>
                    {errors.email && (
                      <div className='form__alert form__alert--error'>Campo requerido</div>
                    )}
                  </div>
                  <div className='form__item'>
                    <textarea
                      className={`form__text ${errors.mensaje && 'invalid'}`}
                      name='mensaje'
                      id='mensaje'
                      cols='20'
                      rows='5'
                      ref={register({ required: true })}></textarea>
                    <label htmlFor='mensaje' className='form__label'>
                      Mensaje
                    </label>
                    {errors.mensaje && (
                      <div className='form__alert form__alert--error'>Campo requerido</div>
                    )}
                  </div>
                </section>
                <footer className='form__footer text-align-right-xs'>
                  {enviando ? (
                    <div className='form__preloader'></div>
                  ) : (
                    <button className='btn btn--primario'>Enviar</button>
                  )}
                </footer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
