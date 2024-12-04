import { useForm } from 'react-hook-form';
import styles from './style.module.css';
import { useState } from 'react';

export const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState();

    const onSubmit = async (formData) => {
        try {
            const response = await fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                setIsSuccess(true);
                reset();
                console.log('Ответ сервера:', data);
            } else {
                console.error('Статус ошибки:', response.status);
                setError('Что-то пошло не так');
            }
        } catch (err) {
            setError('Ошибка запроса, попробуйте позже');
            console.error('Fetch error:', err);
        }
    }

    return (
        <form
            className={styles.form}
            action=""
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <p className={styles.form__title}>У вас есть вопросы?</p>
                <p className={styles.form__subtitle}>Задайте их нашим специалистам</p>
            </div>

            <div className={styles.wrapper__rows}>
                <div>
                    <label className={styles.form__label}>ФИО</label>
                    <input
                        {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                        error={errors.name}
                        className={styles.form__input}
                        type='text'
                        placeholder=''
                    />
                    <div>{errors['name'] && errors['name'].message}</div>
                </div>
                <div>
                    <label className={styles.form__label}>Электронная почта / номер телефона</label>
                    <input
                        {...register('contact-data', { required: { value: true, message: 'Заполните почту/телефон' } })}
                        error={errors.name}
                        className={styles.form__input}
                        type='text'
                        placeholder='' />
                    <div>{errors['contact-data'] && errors['contact-data'].message}</div>
                </div>
                <div>
                    <label className={styles.form__label}>Ваш запрос</label>
                    <textarea
                        {...register('description')}
                        className={styles.form__input}
                        type='text' placeholder=''
                    />
                </div>
                <div>
                    <button className={styles.form__btn__submit}>
                        <p>Задать вопрос</p>

                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button>
                </div>

                <div className={styles.form__policy}>
                    <input type="checkbox"
                        {...register('policy', { required: { value: true, message: 'Необходимо согласиться' } })}
                        error={errors.name}
                    />
                    <div>{errors['policy'] && errors['policy'].message}</div>
                    <p>Пользуясь нашими услугами, вы подтверждаете, что прочитали
                        и полностью согласны с этим документом: Пользовательское Соглашение</p>
                </div >
            </div>
        </form>
    )
}