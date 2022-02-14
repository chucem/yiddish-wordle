import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { CONFIG } from '../../constants/config'
import { Trans, useTranslation } from 'react-i18next'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const { t } = useTranslation()
  return (
    <BaseModal title="" isOpen={isOpen} handleClose={handleClose}>
    <div dir={t('dir')}>
      <h1>{t('about')}</h1>
      <p className="text-sm text-gray-500">
        <Trans
          i18nKey="aboutAuthorSentence"
          values={{ language: CONFIG.language, author: CONFIG.author }}
        >
          This is an open source clone of the game Wordle adapted to
          {CONFIG.language} by
          <a href={CONFIG.authorWebsite} className="underline font-bold">
            {CONFIG.author}
          </a>{' '}
        </Trans>
        <Trans i18nKey="aboutCodeSentence">
          Check out
          <a
            href="https://github.com/hannahcode/wordle"
            className="underline font-bold"
          >
            the original code
          </a>
          by
          <a
            href="https://www.hannahmariepark.com/"
            className="underline font-bold"
          >
            Hannah Park
          </a>
          or have a look at
          <a
            href="https://github.com/roedoejet/AnyLanguage-Wordle"
            className="underline font-bold"
          >
            Aidan Pine's fork
          </a>
          and customize it for another language!
        </Trans>
        <Trans
          i18nKey="aboutDataSentence"
          values={{ wordListSource: CONFIG.wordListSource }}
        >
          The words for this game were sourced from
          <a href={CONFIG.wordListSourceLink} className="underline font-bold">
            {CONFIG.wordListSource}
          </a>
          .
        </Trans>
      </p>
    </div>
     <div dir={t('dir')}>
      <h1>{t('howToPlay')}</h1>
      <p className="text-sm text-gray-500">
        {t('instructions', { tries: CONFIG.tries })}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={t('firstExampleWord.0')} status="correct" />
        <Cell value={t('firstExampleWord.1')} />
        <Cell value={t('firstExampleWord.2')} />
        <Cell value={t('firstExampleWord.3')} />
        <Cell value={t('firstExampleWord.4')} />
      </div>
      <p className="text-sm text-gray-500">{t('correctSpotInstructions')}</p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={t('secondExampleWord.0')} />
        <Cell value={t('secondExampleWord.1')} />
        <Cell value={t('secondExampleWord.2')} status="present" />
        <Cell value={t('secondExampleWord.3')} />
        <Cell value={t('secondExampleWord.4')} />
      </div>
      <p className="text-sm text-gray-500">{t('wrongSpotInstructions')}</p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={t('thirdExampleWord.0')} />
        <Cell value={t('thirdExampleWord.1')} />
        <Cell value={t('thirdExampleWord.2')} />
        <Cell value={t('thirdExampleWord.3')} status="absent" />
        <Cell value={t('thirdExampleWord.4')} />
      </div>
      <p className="text-sm text-gray-500">{t('notInWordInstructions')}</p>
    </div>
   </BaseModal>


  )
}
