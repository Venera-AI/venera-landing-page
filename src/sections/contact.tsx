import React, { FC } from 'react';

const Contact: FC = () => {
    return (
        <div className="bg-blue-100">
            <div className="text-4xl font-medium text-center">
  Contact us
</div>
            <form>
                <div>
                <label>
                    <input className="bg-amber-50" type="text" name="name" placeholder="Name"/>
                </label>
                <label>
                    <input className="bg-amber-50"  type="email" name="email" placeholder="Email"/>
                </label>
                </div>
                <label>
                    <textarea className="bg-amber-50"  name="message" placeholder="Message"></textarea>
                </label>
                <br />
                <button className="bg-blue-300 px-6 py-2 text-white" type="submit"> Send </button>
            </form>
        </div>
    );
};

export default Contact;