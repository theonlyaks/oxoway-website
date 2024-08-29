import React, { Suspense } from 'react';
import AnalysisPage from '../../../components/AnalysisPage';
import { db } from '../../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import HeaderAnalysis from '@/components/HeaderAnalysis';

async function getQuestionData(docId) {
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
}

export async function generateMetadata({ params }) {
  const questionData = await getQuestionData(params.id);
  return {
    title: questionData ? `${questionData.question}` : 'Question Analysis',
  };
}

function LoadingBar() {
  return (
    <div className="w-full h-1 bg-gray-200">
      <div className="h-1 bg-blue-600 animate-loadingBar"></div>
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
    <main>
      <AnalysisPage questionData={questionData.content} />
    </main>
  );
}

export default function Analysis({ params }) {
  const docId = params.id;

  return (
    <>
      <HeaderAnalysis />
      <Suspense fallback={<LoadingBar />}>
        <AnalysisContent docId={docId} />
      </Suspense>
    </>
  );
}