// components/Donation.jsx
import React from 'react';
import DonationButton from './DonationButton'; // Import your DonationButton component

const Donation = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Course</h2>
          <p className="text-gray-600 mb-8">
            Donate through our PayBill or Bank Account to make a difference.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <DonationButton text="Pay Bill" />
            <DonationButton text="Bank Transfer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;