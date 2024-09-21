import React, { Suspense } from 'react';
import AnalysisPage from '../../../components/AnalysisPage';
import { db } from '../../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import HeaderAnalysis from '@/components/HeaderAnalysis';
import { cache } from 'react';

const getQuestionData = cache(async (docId) => {
  try {
    const docRef = doc(db, "ocr_requests", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching question data: ", error);
    return null;
  }
});

export async function generateMetadata({ params }) {
  const questionData = await getQuestionData(params.id);
  return {
    title: questionData ? `${questionData.question}` : 'Question Analysis',
  };
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

function UnauthorizedMessage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-black-500 text-xl">You are not authorized to view this content.</p>
    </div>
  );
}

async function AnalysisContent({ docId }) {
  const questionData = await getQuestionData(docId);
  
  if (!questionData) {
    return <UnauthorizedMessage />;
  }

  return (
    <main className="pt-24 bg-gray-100"> {/* Added padding-top to account for fixed header */}
      <AnalysisPage  questionData={questionData} answerImages={questionData.images}/>
    </main>
  );
}

export default function Analysis({ params }) {
  const docId = params.id;

  return (
    <>
      <HeaderAnalysis />
      <Suspense fallback={<LoadingSpinner />}>
        <AnalysisContent docId={docId} />
      </Suspense>
    </>
  );
}